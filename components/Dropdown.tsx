import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type DropDownProps = {
  value: string,
  onChangeHandler: () => void

}

const Dropdown = ({ value, onChangeHandler }: DropDownProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="match">Match</SelectItem>
        <SelectItem value="training">Training</SelectItem>
        <SelectItem value="meeting">Meeting</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default Dropdown