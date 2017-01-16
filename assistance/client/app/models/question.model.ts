export interface Question {
  controlType: string;
  id: string;
  label: string;
  required: boolean;
  options?: Array<options>;
  type?: string;
  value?: any;
}

interface options {
  key: string;
  value: string;
}
