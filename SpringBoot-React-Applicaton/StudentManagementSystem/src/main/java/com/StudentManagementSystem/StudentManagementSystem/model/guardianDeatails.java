package com.StudentManagementSystem.StudentManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class guardianDeatails {
    @Id
    private int id;
    private String guardianName;
    private String guardianNIC;
    private String relationship;
    private int contactNo;
    private String address;


    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
    public void setGuardianName(String guardianName){
        this.guardianName = guardianName;
    }
    public String getGuardianName(){
        return guardianName;
    }
    public void setGuardianNIC(String guardianNIC){
        this.guardianNIC = guardianNIC;
    }
    public String getGuardianNIC(){
        return guardianNIC;
    }
    public void setRelationship(String relationship){
        this.relationship = relationship;
    }
    public String getRelationship(){
        return relationship;
    }
    public void setContactNo(int contactNo){
        this.contactNo = contactNo;
    }
    public int getContactNo(){
        return contactNo;
    }
    public void setAddress(String address){
        this.address = address;
    }
    public String getAddress(){
        return address;
    }
}
