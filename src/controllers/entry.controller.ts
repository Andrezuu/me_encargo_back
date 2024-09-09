import { Request, Response } from "express";
import * as EntryService from '../services/entry.service'

export const getProductsEntryAmount = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const stock = await EntryService.getProductsEntryAmount(parseInt(id))
        res.json(stock)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Error getting entry amount by a seller Id', error });

    }
}

export const deleteEntries = async (req: Request, res: Response) => {
    const { ids } = req.body;
    try {
        const deleteEntries = await EntryService.deleteEntriesByIds(ids);
        res.json({
            status: true,
            deleteEntries
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error deleting entries', error })
    }
};

export const updateEntry = async (req: Request, res: Response) => {
    const entries = req.body.entries
    try {
        const entryUpdated = await EntryService.updateEntries(entries);
        res.status(200).json({
            status: "success",
            message: `${entryUpdated.length} entries updated successfully`,
            data: entryUpdated
          });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error updating entries", error });
    }
};