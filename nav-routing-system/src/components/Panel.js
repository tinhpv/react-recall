import classNames from 'classnames';

const Panel = ({ children, className, ...rest }) => {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className,
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
