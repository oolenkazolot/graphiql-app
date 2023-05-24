import './Message.scss';

const mainClass = 'message';

type TPropsMessage = {
  title: string;
  content: string | boolean;
};

export const Message = ({ title, content }: TPropsMessage) => {
  return (
    <div className={mainClass}>
      <div className={`${mainClass}__title`}>{title}</div>
      <div className={`${mainClass}__content`}>{content}</div>
    </div>
  );
};
