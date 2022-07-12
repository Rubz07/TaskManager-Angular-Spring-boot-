package com.rubin.mytaskmanager.taskController;

import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rubin.mytaskmanager.model.Task;
import com.rubin.mytaskmanager.repository.TaskRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

@RequestMapping("/api/v1")

public class TaskController {
	@Autowired
	TaskRepository repo;

	@GetMapping("/task")
	public List<Task> getTask() {
		return repo.getAllTaskBasedDueDate();
	}
	
	
	@GetMapping("/taskStatus")
	public List<Task> getTaskOnStatus() {
		return repo.getAllTaskBasedOnStatus();
	}

	@GetMapping("/task/{id}")
	public Task getById(@PathVariable int id) {
		return repo.findById(id).orElseThrow(() -> new EntityNotFoundException("Requested Task not found"));
	}

	@PostMapping("/task")
	public Task addTask(@RequestBody Task task) {
		return repo.save(task);
	}

	@PutMapping("/task/{id}")
	public ResponseEntity<?> addTask(@RequestBody Task taskPara, @PathVariable int id) {
		if (repo.existsById(id)) {
			Task task = repo.findById(id).orElseThrow(() -> new EntityNotFoundException("Requested Task not found"));
			task.setTitle(taskPara.getTitle());
			task.setDueDate(taskPara.getDueDate());
			task.setStatus(taskPara.getStatus());
			task.setDescription(taskPara.getDescription());
			repo.save(task);
			return ResponseEntity.ok().body(task);
		} else {
			HashMap<String, String> message = new HashMap<>();
			message.put("message", id + " task not found or matched");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
		}
	}

	@DeleteMapping("/task/{id}")
	public ResponseEntity<?> deleteTask(@PathVariable int id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
			HashMap<String, String> message = new HashMap<>();
			message.put("message", id + " task removed");
			return ResponseEntity.status(HttpStatus.OK).body(message);
		} else {
			HashMap<String, String> message = new HashMap<>();
			message.put("message", id + " task not found or matched");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
		}
	}

}
