import Accordion from './Accordion';
import AttachImage from './AttachImage';

export default function ImageTab() {
  return (
    <Accordion title="이미지">
      <div>
        <h4>대표 이미지</h4>
        <AttachImage width={96} height={96} />
      </div>
    </Accordion>
  );
}
