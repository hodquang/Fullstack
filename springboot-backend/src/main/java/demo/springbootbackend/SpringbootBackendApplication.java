package demo.springbootbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import demo.springbootbackend.model.User;
import demo.springbootbackend.repository.UserRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("John", "Smith", "js@gmail.com"));
		this.userRepository.save(new User("John", "Smith2", "js2@gmail.com"));
		this.userRepository.save(new User("John", "Smith3", "js3@gmail.com"));

	}

}
