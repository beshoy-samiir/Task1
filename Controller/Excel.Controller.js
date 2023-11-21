const xlsx = require('xlsx');

class Excel{
    static add = async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).send('No file uploaded.');
            }
            const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = xlsx.utils.sheet_to_json(sheet);
            await ExcelModel.insertMany(data);
            return res.status(200).send('Excel data uploaded successfully.');
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error uploading Excel data.');
        }
    }

    static get = async (req, res) => {
        try {
            const { id } = req.params;
            const excelData = await ExcelModel.find({ id: parseInt(id) });
            if (!excelData || excelData.length === 0) {
                return res.status(404).send('No data found for the provided ID.');
            }
            return res.json(excelData);
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error retrieving data.');
        }
    }

    static delete = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedData = await ExcelModel.deleteOne({ id: parseInt(id) });
            if (deletedData.deletedCount === 0) {
                return res.status(404).send('Excel data not found for deletion.');
            }
            return res.status(200).send('Excel data deleted successfully.');
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error deleting Excel data.');
        }
    }
}

module.exports = Excel


