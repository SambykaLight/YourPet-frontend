import React from 'react'
import Modal from '../components/Modals/index';

function PetsListPage() {
  return (
    <div>
      PetsListPage


        {/* назва кнопки універсальна */}
      <Modal openButtonLabel="Відкрити модалку">
        {/* Контент для модального вікна */}
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ut id, autem, temporibus sed eos nostrum praesentium beatae est, fugiat inventore voluptatum iure ipsum minus consequatur dolorum. Architecto, praesentium natus.</p>
      </Modal>


    </div>
  )
}

export default PetsListPage