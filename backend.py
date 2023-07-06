from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import subprocess
import os

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS) for the API


@app.route('/convert', methods=['POST'])
def convert():
    # Remove all files starting with result or temp
    for filename in os.listdir():
        if filename.startswith('result') or filename.startswith('temp'):
            subprocess.run(['rm', filename])

    file_data = request.files['file']
    file_type = request.form['type']

    if file_data and file_type:
        try:
            # Save the uploaded file temporarily
            temp_filename = 'temp_file.' + file_type
            file_data.save(temp_filename)

            # Run ffmpeg command to convert the file
            result_filename = 'result_file.' + file_type
            subprocess.run(['ffmpeg', '-i', temp_filename, result_filename])

            # Remove the temporary file
            subprocess.run(['rm', temp_filename])

            return send_file(result_filename, as_attachment=True)

        except subprocess.CalledProcessError:
            return jsonify({'error': 'Failed to convert the file.'}), 500

    else:
        return jsonify({'error': 'Missing file or file type.'}), 400


if __name__ == '__main__':
    app.run()
