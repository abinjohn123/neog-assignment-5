import Modal from '../../Shared/Modal';

import VoidSVG from '../../../assets/illustrations/void.svg';

import { UserCard } from '../../Sidebar/Suggestions';

const UserListModal = ({ setIsModalOpen, userList }) => {
  console.log(userList);
  return (
    <Modal setIsModalOpen={setIsModalOpen} width={400}>
      <h3>{userList.type}</h3>
      {userList.list.length === 0 && (
        <div className="not-found">
          <div className="img-container">
            <img src={VoidSVG} alt="notfound" />
          </div>
          <p>No {userList.type.toLowerCase()} found!</p>
        </div>
      )}
      {userList.list.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </Modal>
  );
};

export default UserListModal;
