import React, { useState, useEffect } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
type Cars = {
    id: number,
    name: string,
    price: string,
    color: string,
    position: string,
    year: number
}
interface Car {
    open: boolean;
    toggle: () => void
    cars: Array<CarsType>;
    setCars: React.Dispatch<React.SetStateAction<Cars[]>>
    item: Cars | null;
}

export default function AddModal({ open, toggle, setCars, item, cars }) {
    const [name, setName] = useState<string>("")
    const [color, setColor] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [position, setPosition] = useState<string>("")
    const [year, setYear] = useState<string>("")

    useEffect(() => {
        if (item) {
            setName(item.name)
            setColor(item.color)
            setPrice(item.price)
            setPosition(item.position)
            setYear(item.year)
        } else {
            setName("")
            setColor("")
            setPrice("")
            setPosition("")
            setYear("")
        }
    }, [item])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let payload: CarsType = {
            id: cars.length + 1,
            name: name,
            color: color,
            price: price,
            position: position,
            year: year,
        }
        if (item !== null) {
            const car_map = cars?.map((el) => {
                if (el.id === item.id) {
                    return {
                        ...el,
                        name: name,
                        color: color,
                        price: price,
                        position: position,
                        year: year,
                    }
                }
                return el

            })
            setCars(car_map)
        } else {
            setCars([...cars, payload])
        }
        toggle()
    }
    return (
        <div className='mb-[10%]'>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h1 className='text-5xl'>Add Card</h1>
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit} id='form' className='gap-[10px]'>
                        <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} defaultValue={name} className='w-[300px] p-[10px] text-black rounded-xl' />
                        <input type="text" placeholder='color' onChange={(e) => setColor(e.target.value)} defaultValue={color} className='w-[300px] p-[10px] text-black rounded-xl' />
                        <input type="text" placeholder='price' onChange={(e) => setPrice(e.target.value)} defaultValue={price} className='w-[300px] p-[10px] text-black rounded-xl' />
                        <input type="text" placeholder='pasition' onChange={(e) => setPosition(e.target.value)} defaultValue={position} className='w-[300px] p-[10px] text-black rounded-xl' />
                        <input type="text" placeholder='year' onChange={(e) => setYear(e.target.value)} defaultValue={year} className='w-[300px] p-[10px] text-black rounded-xl' />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button type='submit' form='form' className='btn btn-primary'>send</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}