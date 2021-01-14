const fs = require('fs');
const path = require('path');
const base = "target";
const dir = '/path/to/folder/containing/files/you/want/to/rename/';

// list all files in the directory
fs.readdir(dir, (err, files) => {
	if (err) {
		throw err;
	}

	files.forEach((file, i) => {
		const filePath = path.join(dir, file);
		const extension = file.substring(file.length - 4, file.length)
		const newFilePath = path.join(
			dir,
			base + i.toString() + extension
		);

		fs.rename(filePath, newFilePath, err => {
			if (err) throw err;
			console.log(filePath, newFilePath);
		});
	});
});
