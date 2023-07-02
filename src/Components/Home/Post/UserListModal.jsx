import Modal from '../../Shared/Modal';
import VoidSVG from '../../Shared/Void';
import { UserCard } from '../../Sidebar/Suggestions';

const UserListModal = ({ setIsModalOpen, userList }) => {
  console.log(userList);
  return (
    <Modal setIsModalOpen={setIsModalOpen} width={400}>
      <h3>{userList.type}</h3>
      {userList.list.length === 0 && (
        <VoidSVG content={`No ${userList.type.toLowerCase()} found!`} />
      )}
      {userList.list.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </Modal>
  );
};

export default UserListModal;
