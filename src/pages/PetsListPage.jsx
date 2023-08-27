import React from 'react';
import Modal from 'components/Modals/Modal';
import Context from 'components/Modals/Context';

import CardMore from 'components/Modals/CardMore/CardMore';



function PetsListPage() {

  return (
    <div>
      PetsListPage
      <Context>
        <Modal openButtonLabel={'Learn more'}>

          <CardMore/>

        </Modal>
      </Context>
    </div>
  );
}

export default PetsListPage;
