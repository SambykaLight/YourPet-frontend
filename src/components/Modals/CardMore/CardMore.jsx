// Modal.js

import React from 'react';
import { useModalContext } from '../Context/Context';

function CardMore() {
  const context = useModalContext();

  const { toggle } = context;

  return (
    <div>
      <div>
      <img src="https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg" alt="Placeholder" />
<div>
        <h2>фівфіфівфвфівфв</h2>
        <table border="1">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Rich</td> 
            </tr>
            <tr>
              <td>Birthday</td>
              <td>Рядок 2, Клітинка 2</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>Рядок 1, Клітинка 2</td>
            </tr>
            <tr>
              <td>Place:</td>
              <td>Рядок 2, Клітинка 2</td>
            </tr>
            <tr>
              <td>The sex:</td>
              <td>Рядок 1, Клітинка 2</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>Рядок 2, Клітинка 2</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>Рядок 1, Клітинка 2</td>
            </tr>
          
          </tbody>
        </table>
</div>
      </div>

      <p>
      <span>Comments:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        blanditiis repudiandae a labore, mollitia ipsam architecto et quis atque
        porro doloremque nemo laborum, alias harum quod molestias unde,
        aspernatur soluta.
      </p>

      <div>
        <button onClick={() => toggle()}>Add to</button>
        <button onClick={() => toggle()}>Contact</button>
      </div>
    </div>
  );
}

export default CardMore;
