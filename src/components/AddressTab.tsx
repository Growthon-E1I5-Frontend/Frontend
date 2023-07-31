import Accordion from './common/Accordion';
import Input from './common/Input';

export default function AddressTab() {
  return (
    <Accordion title="주소">
      <Input
        width={305}
        backgroundColor="#f3f3f3"
        border="none"
        placeholder="주소"
      />
      <Input
        width={305}
        backgroundColor="#f3f3f3"
        border="none"
        placeholder="상세주소"
      />
      <Input
        width={305}
        backgroundColor="#f3f3f3"
        border="none"
        placeholder="우편번호"
      />
    </Accordion>
  );
}
