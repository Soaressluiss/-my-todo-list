import React from "react";
import "./ModalStyles.scss";

interface IModalTypes {
    children: React.ReactNode;
}

const Modal = ({ children }: IModalTypes): JSX.Element => {
    const closeModal = (): void => {
        const modal = document.querySelector("#modal");
        modal?.classList.add("hide");
    };
    return (
        <section id="modal" className="hide">
            <div className="fade" onClick={closeModal}></div>
            <div className="modal">
                <h2>Editar Tarefa 📝</h2>
                {children}
            </div>
        </section>
    );
};

export default Modal;
