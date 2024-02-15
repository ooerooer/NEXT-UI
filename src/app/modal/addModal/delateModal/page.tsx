import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function DeleteModal({ open, toggle, id, setCars, cars }) {
    type CarsType = {
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
        id: number | undefined;
        cars: Array<CarsType>;
        setCars: React.Dispatch<React.SetStateAction<CarsType[]>>
    }


    const remove = () => {
        const filtered = cars.filter((item) => item.id !== id);
        setCars(filtered)
        toggle()
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <Modal isOpen={open} toggle={toggle}>
                <ModalBody className='flex flex-col items-center'>
                    <h4> Are you sure want to delete</h4>
                </ModalBody>
                <ModalFooter>
                    <button onClick={toggle} className='btn btn-close'></button>
                    <button onClick={remove} className='btn btn-danger'>yess</button>
            </ModalFooter>
        </Modal>
        </div >
    )
}