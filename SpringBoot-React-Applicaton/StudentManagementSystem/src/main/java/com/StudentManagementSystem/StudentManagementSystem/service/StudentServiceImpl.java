package com.StudentManagementSystem.StudentManagementSystem.service;

import com.StudentManagementSystem.StudentManagementSystem.model.Student;
import com.StudentManagementSystem.StudentManagementSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student){
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public String deleteStudent(int id) {
        Optional<Student> optionalUser = studentRepository.findById(id);

        if(optionalUser.isPresent()){
            studentRepository.delete(optionalUser.get());
            return "Your Record has been deleted";
        }else{
            return "Record not Found";
        }
    }
    @Override
    public Optional<Student> getOneStudent(int id){
        return studentRepository.findById(id);
    }

    @Override
    public Student login(String email, String password) {
        Student student = studentRepository.findByEmail(email);
        try{
            if(student != null && student.getPassword().equals(password)){
                return student;
            }
        }catch (Exception e){
            System.out.println("Invalid UserName Password");
        }
        return null;
    }
}
