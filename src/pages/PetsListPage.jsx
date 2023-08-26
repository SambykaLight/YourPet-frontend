import React from 'react'
import Modal from 'components/Modals/Modal'
import Context from 'components/Modals/Context/Context';



const { toggle } = Context
console.log(toggle);

function PetsListPage() {
  return (
    <div>
      PetsListPage

<Context>


<Modal openButtonLabel={"asdsd"}>


<p>
  
  
  
  <button onClick={() => console.log(toggle)}>"asdasd"</button>
  
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi quos laboriosam asperiores necessitatibus consequuntur voluptatem dicta perferendis illo quas explicabo, aperiam repudiandae odit accusamus culpa adipisci voluptate unde officia.</p>

</Modal>

</Context>




    </div>
  )
}

export default PetsListPage