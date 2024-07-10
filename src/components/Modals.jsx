const Modal = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{service.title}</h2>
          <button
            className="text-black text-2xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <ul className="list-disc list-inside">
          {service.desc.map((point, index) => (
            <li key={index} className="mb-2">{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
