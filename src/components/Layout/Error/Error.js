import { FiAlertTriangle } from 'react-icons/fi';
const error = props => {
  return (
    <div class="error">
      <div>
        <FiAlertTriangle />
      </div>
      <p>{props.message}</p>
    </div>
  );
};
export default error;
