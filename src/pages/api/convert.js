import CloudConvert from 'cloudconvert';
import { v4 as uuidv4 } from "uuid";

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method not allowed');
    }

    const { name, data, type } = req.body;

    console.log("Name: " + name);
    console.log("Data: " + data);
    console.log("Type: " + type);

    const inputFormat = name.split('.').pop();

    const id = uuidv4();

    const cloudConvert = new CloudConvert(process.env.API_KEY);

    let job = await cloudConvert.jobs.create({
        tasks: {
            'import-my-file': {
                operation: 'import/upload',
                data,
            },
            'convert-my-file': {
                operation: 'convert',
                input_format: inputFormat,
                output_format: type,
                input: ['import-my-file'],
                filename: `${id}.${type}`,
            },
            'export-my-file': {
                operation: 'export/url',
                input: ['convert-my-file'],
            },
        },
    });

    job = await cloudConvert.jobs.wait(job.id);

    const exportTask = job.tasks.filter(
        (task) => task.operation === 'export/url'
    )[0];

    const { blob } = exportTask.result.files[0];

    console.log("Result file: ");

    console.log(blob);
    return res.status(200).send(blob);
};

export default handler;
