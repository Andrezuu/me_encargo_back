import { In } from 'typeorm';
import AppDataSource from '../config/dataSource';
import { IngresoEntity } from '../entities/implements/IngresoEntity';
import { IIngreso } from '../entities/IIngreso';

const entryRepository = AppDataSource.getRepository(IngresoEntity);

export const findBySellerId = async (sellerId: number): Promise<IngresoEntity[] | null> => {
    return await entryRepository.find({
        where: {
            id_vendedor: sellerId
        },
        relations: {
            producto: true
        }
    })
}

export const findByProductId = async (productId: number): Promise<IngresoEntity[]| null> => {
    const entries = await entryRepository.find({
        where: {
            id_producto: productId
        },
        select: {
            id_ingreso: true,
            fecha_ingreso: true,
            estado: true,
            cantidad_ingreso: true,
            id_producto: true,
            id_vendedor: true,
            id_sucursal: true,
            producto: {
                id_producto: true,
                nombre_producto: true
            },
            vendedor: {
                id_vendedor: true,
                marca: true,
                nombre: true,
                apellido: true
            }
        },
        relations: {
            producto: true,
            vendedor: true
        }
    });

    return entries;
};

export const deleteEntriesByIds = async (entriesIds: number[]): Promise<any> => {
    return await entryRepository.delete({ id_ingreso: In(entriesIds) });
};

export const findById = async (entryId: number) => {
    return await entryRepository.findOne({
        where: {
            id_ingreso: entryId,
        },
    });
};
export const updateEntryById = async (newData: any, entry: IIngreso) => {
    entry = { ...entry, ...newData };
    const newEntry = await entryRepository.save(entry);
    return newEntry;
};
export const getEntriesByIds = async (entriesIds: number[]): Promise<IngresoEntity[]> => {
    if (!entriesIds || entriesIds.length === 0) {
        return [];
    } else {
        return await entryRepository.find({
            where: {
                id_ingreso: In(entriesIds)
            }
        })
    }

}