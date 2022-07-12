package com.rubin.mytaskmanager.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.rubin.mytaskmanager.model.Task;
@CrossOrigin("http://localhost:4200")
public interface TaskRepository extends JpaRepository<Task,Integer> {
	
	@Query(value="Select * from tbl_task where task_status='pending' order by task_due_date asc",nativeQuery = true)
	public List<Task> getAllTaskBasedDueDate();

	@Query(value="Select * from tbl_task where task_status='Completed' order by task_due_date asc",nativeQuery = true)
	public List<Task> getAllTaskBasedOnStatus();
}
