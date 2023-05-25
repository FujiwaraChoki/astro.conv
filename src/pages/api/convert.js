import { v4 as uuidv4 } from 'uuid';
import { ConvertApi } from 'convertapi';

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method not allowed');
    }

    const { name, data, type } = req.body;

    console.log('Name: ' + name);
    console.log('Data: ' + data);
    console.log('Type: ' + type);

    const inputFormat = name.split('.').pop();

    const id = uuidv4();

    console.log('API KEY: ', process.env.API_KEY);

    const convertApi = new ConvertApi(process.env.API_KEY);

    const inputFile = await convertApi.upload(data, name);

    const conversion = await convertApi.convert(type, {
        File: inputFile,
        FileName: `${id}.${type}`,
    });

    const result = await conversion.saveFiles();

    const url = result.files[0].Url;

    console.log('Result file: ');
    console.log(url);

    return res.status(200).send(url);
};

export default handler;