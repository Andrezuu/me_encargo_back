import { Router } from "express";

import * as EntryController from '../controllers/entry.controller'

const entryRouter = Router();

entryRouter.get('/seller/:id', EntryController.getProductsEntryAmount);

entryRouter.get('/product/:id', EntryController.getProductEntryDetails);

entryRouter.delete('/', EntryController.deleteEntries)

entryRouter.put('/', EntryController.updateEntry);

export default entryRouter;