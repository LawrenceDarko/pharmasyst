'use client'

import { Button } from "@/components/ui/button";
import {
    Card,
    Title,
    Text,
    Flex,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    Badge,
    // Button,
} from "@tremor/react";
import { useState } from "react";
import { GrFormNext } from "react-icons/gr";

//   const colors = {
//     "Ready for dispatch": "gray",
//     Cancelled: "rose",
//     Shipped: "emerald",
//   };
const colors: {
    [key: string]: string;
} = {
    "Ready for dispatch": "gray",
    Cancelled: "rose",
    Shipped: "emerald",
};

const transactions = [
    {
    transactionID: "#123456",
    user: "Lena Mayer",
    item: "Under Armour Shorts",
    status: "Ready for dispatch",
    amount: "$ 49.90",
    link: "#",
    },
    {
    transactionID: "#234567",
    user: "Max Smith",
    item: "Book - Wealth of Nations",
    status: "Ready for dispatch",
    amount: "$ 19.90",
    link: "#",
    },
    {
    transactionID: "#345678",
    user: "Anna Stone",
    item: "Garmin Forerunner 945",
    status: "Cancelled",
    amount: "$ 499.90",
    link: "#",
    },
    {
    transactionID: "#4567890",
    user: "Truls Cumbersome",
    item: "Running Backpack",
    status: "Shipped",
    amount: "$ 89.90",
    link: "#",
    },
    {
    transactionID: "#5678901",
    user: "Peter Pikser",
    item: "Rolex Submariner Replica",
    status: "Cancelled",
    amount: "$ 299.90",
    link: "#",
    },
    {
    transactionID: "#6789012",
    user: "Phlipp Forest",
    item: "On Clouds Shoes",
    status: "Ready for dispatch",
    amount: "$ 290.90",
    link: "#",
    },
    {
    transactionID: "#78901234",
    user: "Mara Pacemaker",
    item: "Ortovox Backpack 40l",
    status: "Shipped",
    amount: "$ 150.00",
    link: "#",
    },
    {
    transactionID: "#89012345",
    user: "Sev Major",
    item: "Oakley Jawbreaker",
    status: "Ready for dispatch",
    amount: "$ 190.90",
    link: "#",
    },
];

export default function PatientsTable() {

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedTransactions = transactions.slice(startIndex, endIndex);

    const totalPages = Math.ceil(transactions.length / itemsPerPage);

    const handlePageChange = (newPage: any) => {
        setCurrentPage(newPage);
    };

    return (
    <div className="mb-5">
        <Table className="">
        <TableHead className="bg-[#F8FAFC]">
            <TableRow>
            <TableHeaderCell>Scheduled Date</TableHeaderCell>
            <TableHeaderCell>Time</TableHeaderCell>
            <TableHeaderCell>Patient ID</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell className="text-right">Amount</TableHeaderCell>
            <TableHeaderCell>Link</TableHeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {paginatedTransactions.map((item) => (
            <TableRow key={item.transactionID}>
                <TableCell>{item.transactionID}</TableCell>
                <TableCell>{item.user}</TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell>
                <Badge color={colors[item.status]} size="xs">
                    {item.status}
                </Badge>
                </TableCell>
                <TableCell className="text-right">{item.amount}</TableCell>
                <TableCell>
                <Button size="sm" variant="outline" color="gray">
                    See details
                </Button>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
        {totalPages > 1 && (
        <Flex justifyContent="end" className="mt-4">
        <Button
            size="sm"
            variant="secondary"
            color="gray"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Previous
        </Button>
        <Text className="mx-2">
            Page {currentPage} of {totalPages}
        </Text>
        <Button
            size="sm"
            variant="secondary"
            color="gray"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Next
        </Button>
        {/* <GrFormNext disabled className={` ${currentPage === totalPages ? '' : 'text-gray-500'}`} onClick={() => handlePageChange(currentPage + 1)} /> */}
        </Flex>
    )}
    </div>
    );
}