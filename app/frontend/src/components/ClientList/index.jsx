import './styles.css';
import {getStatusColor} from '../../utils/formatters.js'

function ClientList({ clients, handleEditClient }) {
  return (
    <div id='users-list-container'>
        {clients.map((client) => (
          <section id='user' key={client.id}>
            <div className='user-data'>
              <p className='name-cpf-color'>{client.name}</p>
              <p className='email-telephone-color'>{client.email}</p>               
            </div>
            <div className='user-data'>
              <p className='name-cpf-color'>{client.cpf}</p>
              <p className='email-telephone-color'>{client.telephone}</p>               
            </div>
            <div id='user-status'>
              <div
                id='status-color'
                className={`status-${getStatusColor(client.status)}`}
              ></div>
              {client.status}
            </div>
            <button id='edit-button' onClick={() => handleEditClient(client)}>Editar</button>
          </section>
        ))}
    </div>
  );
}

export default ClientList;
