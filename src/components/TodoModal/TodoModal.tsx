import React from 'react';
import { Loader } from '../Loader';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { EyeId } from '../../types/EyeId';

type Props = {
  user: User | null;
  todo: Todo | null;
  modalLoader: boolean;
  getModal: (pickedEye: EyeId | null) => void;
};

export const TodoModal: React.FC<Props> = ({
  user,
  todo,
  modalLoader,
  getModal,
}) => {
  const handleClearModal = () => {
    getModal(null);
  };

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {modalLoader ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              {`Todo #${todo?.id}`}
            </div>

            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={handleClearModal}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {todo?.title}
            </p>

            <p className="block" data-cy="modal-user">
              {todo?.completed ? (
                <strong className="has-text-success">Done</strong>
              ) : (
                <strong className="has-text-danger">Planned</strong>
              )}

              {' by '}

              <a href={`mailto:${user?.email}`}>{user?.name}</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
