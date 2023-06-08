const ConvertApi = require('convertapi');
const { writeFileSync } = require('fs');

const uploadFile = async (fileData, fileName) => {
    writeFileSync('/tmp/' + fileName, fileData, 'binary');

    return '/tmp/' + fileName;
};

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method not allowed');
    }

    const { data, name, type } = req.body;

    try {
        // Upload the file
        const uploadedFileUrl = await uploadFile(data);

        // Convert the uploaded file
        const convertApi = new ConvertApi(process.env.API_KEY);
        const conversion = await convertApi.convert(type, { File: uploadedFileUrl });
        const convertedFile = await conversion.file.save();

        // Create a blob from the converted file
        const blob = new Blob([convertedFile], { type: `image/${type}` });

        // Set the file name
        const fileName = `${name}.${type}`;

        // Set the headers
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        res.setHeader('Content-Type', `image/${type}`);

        return res.status(200).send({
            filename: fileName,
            data: blob,
        });
    } catch (error) {
        console.error('File conversion error:', error);
        return res.status(500).send({
            error: error.message,
        });
    }
};

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1000mb'
        }
    }
};

export default handler;
