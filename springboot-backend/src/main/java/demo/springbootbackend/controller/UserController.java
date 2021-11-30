package demo.springbootbackend.controller;

import java.util.List;

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

import demo.springbootbackend.model.User;
import demo.springbootbackend.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("users")
	public List<User> getAllUsers() {
		return this.userRepository.findAll();
	}

	@PostMapping("users")
	public User saveUser(@RequestBody User user) {
		return this.userRepository.save(user);
	}

	@GetMapping("users/{id}")
	public User getSingleEmployee(@PathVariable Long id) {
		return this.userRepository.findById(id).get();
	}

	@PutMapping("users")
	public User updateUser(@RequestBody User user) {
		return this.userRepository.save(user);
	}

	@DeleteMapping("users/{id}")
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable Long id) {
		this.userRepository.deleteById(id);
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
}