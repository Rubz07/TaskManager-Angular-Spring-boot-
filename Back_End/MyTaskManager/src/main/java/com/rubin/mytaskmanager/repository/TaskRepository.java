package com.rubin.mytaskmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rubin.mytaskmanager.model.Task;

public interface TaskRepository extends JpaRepository<Task,Integer> {

}
