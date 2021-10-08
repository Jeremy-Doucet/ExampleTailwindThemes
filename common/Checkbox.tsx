import { Label } from './Label';

export function Checkbox({ label, ...props }) {
  const styles = `border border-button-secondary rounded-sm h-5 w-5 mr-2`;
  return (
    <div className="flex flex-row items-center">
      <input className={styles} type="checkbox" {...props} /> <Label>{label}</Label>
    </div>
  );
}
