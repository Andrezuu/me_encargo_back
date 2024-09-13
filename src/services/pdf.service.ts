import { googleDrive } from "../api/drive/google.drive"




const generatePdf = async (bodyTable: any) => {
    console.log("PDF Service")
    try {
        const pdf = await googleDrive.sentProductsPDF(bodyTable)
        return pdf
    } catch (error) {
        throw error
    }
}

export default generatePdf