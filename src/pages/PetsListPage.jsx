import Context from 'components/Modals/Context/Context';
import Modal from '../components/Modals/index';
import CardMore from 'components/Modals/CardMore/CardMore';

function PetsListPage() {
  return (
    <div>
      PetsListPage
      <Context>
        {/* назва кнопки універсальна */}
        <Modal openButtonLabel="Відкрити модалку">
          {/* Контент для модального вікна */}
          <CardMore />
        </Modal>
      </Context>
    </div>
  );
}

export default PetsListPage;
