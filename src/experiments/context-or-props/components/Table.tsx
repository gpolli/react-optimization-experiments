import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shadcn/table'

import { Components } from '../types/interfaces'

export const PostsTable: Components.PostsTable = ({ data }) => (
  <Table className="text-white">
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px] text-white">ID</TableHead>
        <TableHead className="text-white">Title</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map(({ id, title }) => (
        <TableRow key={id}>
          <TableCell className="font-medium">{id}</TableCell>
          <TableCell>{title}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
