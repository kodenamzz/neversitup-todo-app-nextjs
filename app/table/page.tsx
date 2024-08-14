import { Input } from "@/components/ui/input";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

export interface TableData {
  columns: Column[];
  data: Array<Array<number | string>>;
}

export interface Column {
  key: string;
  name: string;
}

const jsonData: TableData = {
  columns: [
    {
      key: "id",
      name: "",
    },
    {
      key: "no",
      name: "No.",
    },
    {
      key: "title",
      name: "Title",
    },
    {
      key: "desc",
      name: "Description",
    },
    {
      key: "date",
      name: "Created Date",
    },
  ],
  data: [
    [
      "f22ecad5-cbb6-402b-995f-6867792bc9c6",
      1,
      "Job 1",
      "This is job 1",
      "1 Oct 2023 12:03:48",
    ],
    [
      "6a412fa7-2c3b-4e38-8973-2b32479bffab",
      2,
      "Job 2",
      "This is job 2",
      "11 Oct 2023 10:03:48",
    ],
    [
      "2c302941-3ba7-413d-84a6-20503355b08a",
      3,
      "Job 3",
      "This is job 3",
      "14 Oct 2023 18:34:48",
    ],
    [
      "eff7e063-3e18-4790-95b4-abf62470e874",
      4,
      "Job 4",
      "This is job 4",
      "1 Oct 2023 09:26:48",
    ],
  ],
};

const transformArray2DToArrayObject = (inputData: TableData) => {
  const { data } = inputData;

  return {
    columns: inputData.columns,
    data: data.map(([id, no, title, desc, date]) => ({
      id,
      no,
      title,
      desc,
      date,
    })),
  };
};
const page = () => {
  const transFormedTableData = transformArray2DToArrayObject(jsonData);
  return (
    <div className="mt-20 min-h-screen flex flex-col justify-center mx-60">
      <h1 className="mb-6 text-2xl text-center font-semibold tracking-tight">
        Table
      </h1>
      <Table className="border">
        <TableHeader className="bg-slate-200">
          <TableRow>
            {jsonData.columns
              .filter((t) => t.key !== "id")
              .map((col) => (
                <TableHead key={col.key} className="w-[100px] text-center">
                  {col.name}
                </TableHead>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {jsonData.data.map(([, ...col]) => (
            <TableRow>
              {col.map((celData) => (
                <TableCell className="text-center">{celData}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4">
        <p className="text-sm text-muted-foreground my-1">
          Transformed data result
        </p>
        <Input
          multiline
          disabled
          className="min-h-[500px] !cursor-text"
          value={JSON.stringify(transFormedTableData, null, 3)}
        />
      </div>
    </div>
  );
};

export default page;
