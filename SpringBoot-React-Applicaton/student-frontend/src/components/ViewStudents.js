import React, { useEffect, useState } from 'react';
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";

export default function ViewStudents() {
    const [students, setStudents] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/Student/all_students")
            .then(res => res.json())
            .then(result => {
                setStudents(result);
            });
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/Student/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                window.alert(`Student with id ${id} deleted successfully.`);
                // Remove the deleted student from the state
                setStudents(students.filter(student => student.id !== id));
            } else {
                console.error(`Failed to delete student with id ${id}.`);
            }
        })
        .catch(error => {
            console.error('Error deleting student:', error);
        });
    };

    const goToViewOneStudent = (id) => {
        navigate(`/students/${id}`);
    };

    return (
        <Container>
            <Box>
                <h2>All Students</h2>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Index No</TableCell>
                                <TableCell>Student Name</TableCell>
                                <TableCell>Student Address</TableCell>
                                <TableCell>Student NIC</TableCell>
                                <TableCell>Contact Info</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map(student => (
                                <TableRow key={student.id}>
                                    <TableCell>{student.indexNo}</TableCell>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.address}</TableCell>
                                    <TableCell>{student.nic}</TableCell>
                                    <TableCell>{student.contactNo}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleDelete(student.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton onClick={() => goToViewOneStudent(student.id)}>
                                            <VisibilityIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}
