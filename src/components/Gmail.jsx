
const Gmail = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('sohel170596@gmail.com')
      .then(() => {
        alert('Email copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <div className="h-1 w-36 bg-slate-400 rounded-lg"></div>
        
        <div className="text-slate-400 text-lg">
          <span 
            className="hover:text-white cursor-pointer"
            onClick={copyToClipboard} // Event listener to copy the email
          >
            sohel170596@gmail.com
          </span>
        </div>
        
        <div className="h-1 w-12 bg-slate-400 rounded-lg"></div>
      </div>
    </>
  );
};

export default Gmail;
