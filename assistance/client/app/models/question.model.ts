export interface Question {
  controlType: string;
  id: string;
  label: string;
  required: boolean;
  options?: Array<any>;
  type?: string;
  value?: any;
}
