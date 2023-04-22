import React from "react";
import "./ModalStyles.scss";

interface IModalTypes {
    children: React.ReactNode;
}

const Modal = ({ children }: IModalTypes) => {
    return (
        <section id="modal">
            <div className="fade"></div>
            <div className="modal">
                <h2>Editar Tarefa 📝</h2>
                {children}
            </div>
        </section>
    );
};

export default Modal;
