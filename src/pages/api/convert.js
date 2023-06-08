const ConvertApi = require('convertapi');

const convertFile = async (data, type) => {
    // Set up ConvertApi client
    const convertApi = new ConvertApi(process.env.API_KEY);

    // Convert the file
    const conversion = await convertApi.convert(type, { File: data });

    // Retrieve the converted file
    const convertedFile = await conversion.file.save();

    return convertedFile;
};

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method not allowed');
    }

    const { name, data, type } = req.body;

    try {
        // Convert the file to the desired type
        const convertedFile = await convertFile(data, type);

        // Create a blob from the converted file
        const blob = new Blob([convertedFile], { type: `image/${type}` });

        // Set the file name
        const fileName = `${name}.${type}`;

        // Set the headers
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        res.setHeader('Content-Type', `image/${type}`);

        return res.status(200).send(blob);
    } catch (error) {
        console.error('File conversion error:', error);
        return res.status(500).send('File conversion error');
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
