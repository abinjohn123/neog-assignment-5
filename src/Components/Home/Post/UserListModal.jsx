import useUser from '../../../hooks/useUser';

import Modal from '../../Shared/Modal';
import VoidSVG from '../../Shared/Void';
import UserCard from '../../Profile/UserCard';

const UserListModal = ({ setIsModalOpen, userList }) => {
  const { allUsers } = useUser();
  const detailedUserList = allUsers.filter((user) =>
    userList.list.includes(user._id)
  );

  return (
    <Modal setIsModalOpen={setIsModalOpen} width={400}>
      <h3>{userList.type}</h3>
      {userList.list.length === 0 && (
        <VoidSVG content={`No ${userList.type.toLowerCase()} found!`} />
      )}
      {detailedUserList.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </Modal>
  );
};

export default UserListModal;
