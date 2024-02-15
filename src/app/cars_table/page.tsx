"use client"
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from '../modal/addModal/page';
import DeleteModal from '../modal/addModal/delateModal/page';
import { useRouter } from 'next/navigation';

type Cars = {
    id: number,
    name: string,
    price: string,
    color: string,
    position: string,
    year: number
}

type editType = Cars | null

export default function CarsTable() {
    const [cars, setCars] = useState<Cars[]>([
        { id: 1, name: "Tesla", price: "1000", color: "silver", position: "Model 3", year: 2024 },
        { id: 2, name: "Tesla", price: "4000", color: "Black", position: "Model X", year: 2024 },
    ])

    const [addModal, setAddModal] = useState<boolean>(false)
    const [deleteModal, setDeleteModal] = useState<boolean>(false)
    const [id, setId] = useState<number>()
    const [item, setItem] = useState<editType>(null)
    const router = useRouter();

    const openModal = () => {
        setAddModal(true)
    }

    const remove = (id: number) => {
        setDeleteModal(true)
        setId(id)
    }

    const edit = (item: Cars) => {
        setItem(item)
        setAddModal(true)
    }

    const toggle = () => {
        setAddModal(false)
        setDeleteModal(false)
    }

    const single = () => {
        router.push('/cars/carsId')
    }

    return (
        <div>
            <AddModal open={addModal} toggle={toggle} cars={cars} setCars={setCars} item={item} />
            <DeleteModal open={deleteModal} toggle={toggle} id={id} cars={cars} setCars={setCars} />
            <div className='container'>
                <button onClick={openModal} className='btn btn-success mt-3'>Add cars</button>

                <table className='table table-hover bordered mt-5'>
                    <thead>
                        <tr>
                            <th>T/r</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Position</th>
                            <th>Year</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars?.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td >{item.name}</td>
                                    <td >${item.price}</td>
                                    <td>{item.color}</td>
                                    <td>{item.position}</td>
                                    <td>{item.year}</td>
                                    <td>
                                        <div className='d-flex gap-3'>
                                            <button onClick={() => edit(item)} className='btn btn-primary'>edit</button>
                                            <button onClick={() => remove(item.id)} className='btn btn-danger'>delete</button>
                                            <button className='btn btn-warning' onClick={single}>single</button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}