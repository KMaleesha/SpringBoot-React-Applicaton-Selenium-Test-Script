import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Paper, Stack, Typography, styled, Container } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const containerStyle = {
    marginTop: '20px',
};

export default function ViewStudent() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/Student/${id}`)
            .then(res => res.json())
            .then(result => {
                setStudent(result);
            });
    }, [id]);

    if (!student) {
        return <div>Loading...</div>;
    }

    const studentData = [
        { label: 'Index No', value: student.indexNo },
        { label: 'Name', value: student.name },
        { label: 'Address', value: student.address },
        { label: 'NIC', value: student.nic },
        { label: 'Contact Info', value: student.contactNo },
    ];

    return (
        // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Container >
        <div>
            <h2>Student Details</h2>
        </div>
        <Box sx={{ width: '800px', justifyContent: 'center', alignItems: 'center'}}>
            <Stack spacing={2}>
                {studentData.map((data, index) => (
                    <StyledPaper key={index}>
                        <Typography variant="body2" color="textSecondary">
                            {data.label}: {data.value}
                        </Typography>
                    </StyledPaper>
                ))}
            </Stack>
        </Box>
    </Container>
    // </div>
    );
}
