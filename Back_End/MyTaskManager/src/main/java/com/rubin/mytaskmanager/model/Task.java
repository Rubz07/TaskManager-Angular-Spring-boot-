package com.rubin.mytaskmanager.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity

@Table(name = "tbl_task")
@Data
public class Task {


//
//	public Task()
//
//	{
//	}
//	
//	public Task(int id, String title, String description, Date dueDate, String status) {
//		super();
//		this.id = id;
//		this.title = title;
//		this.description = description;
//		this.dueDate = dueDate;
//		this.status = status;
//	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "task_id")
	private int id;
	@Column(name = "task_title")
	private String title;
	@Column(name = "task_description")
	private String description;
	
	@Column(name = "task_due_date")
	private Date dueDate;
	@Column(name = "task_status")
	private String status;

	@Override
	public String toString() {
		return "Task [id=" + id + ", title=" + title + ", description=" + description + ", dueDate=" + dueDate
				+ ", status=" + status + "]";
	}


}
