package ru.codeline.services;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.codeline.dto.TeacherRequest;
import ru.codeline.models.user.Pass;
import ru.codeline.models.user.Role;
import ru.codeline.models.user.User;
import ru.codeline.repositories.PassRepository;
import ru.codeline.repositories.UserRepository;

@Service
@RequiredArgsConstructor
public class TeacherService {

    private final UserRepository userRepository;
    private final PassRepository passRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;

    public void addTeacher(TeacherRequest request) {
        User teacherUser = new User();
        teacherUser.setFirstName(request.getFirstName());
        teacherUser.setLastName(request.getLastName());
        teacherUser.setEmail(request.getEmail());
        userRepository.save(teacherUser);

        Pass teacherPass = new Pass();
        teacherPass.setUser(teacherUser);

        String plainPassword = PasswordService.generateRandomPassword(8);
        teacherPass.setPassword(passwordEncoder.encode(plainPassword));

        teacherPass.setRole(Role.TEACHER);
        passRepository.save(teacherPass);

        // Send email with password to teacher
        emailService.sendPasswordEmail(request.getEmail(), plainPassword);
    }
}
