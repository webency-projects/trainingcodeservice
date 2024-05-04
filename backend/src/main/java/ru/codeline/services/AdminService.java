package ru.codeline.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import ru.codeline.models.user.Pass;
import ru.codeline.models.user.Role;
import ru.codeline.models.user.User;
import ru.codeline.repositories.PassRepository;
import ru.codeline.repositories.UserRepository;

@Component
public class AdminService implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PassRepository passRepository;
    @Autowired
    private PasswordEncoder passwordEncoder; // Inject PasswordEncoder

    @Override
    public void run(String... args) {
        User adminUser = new User();
        adminUser.setFirstName("Nadezhda");
        adminUser.setLastName("Likhanova");
        adminUser.setEmail("nadyushka.likhanova2015@gmail.com");
        userRepository.save(adminUser);

        Pass adminPass = new Pass();
        adminPass.setUser(adminUser);

        String encodedPassword = passwordEncoder.encode("admin_bigboss"); // Encode password
        adminPass.setPassword(encodedPassword);

        adminPass.setRole(Role.ADMIN);
        passRepository.save(adminPass);
    }
}
