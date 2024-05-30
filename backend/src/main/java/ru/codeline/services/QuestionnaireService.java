package ru.codeline.services;

import ru.codeline.dto.QuestionnaireRequest;
import ru.codeline.models.course.Lecture;
import ru.codeline.models.course.Questionnaire;

import java.util.List;

public class QuestionnaireService {
    /*private void addQuestionnaires(Lecture lecture, List<QuestionnaireRequest> questionnaires) {
        if (questionnaires != null) {
            for (QuestionnaireRequest questionnaireRequest : questionnaires) {
                if (questionnaireRequest.getOptions().size() != 4) {
                    throw new IllegalArgumentException("Exactly 4 options must be provided");
                }
                // Creates and populates a Questionnaire object based on the provided QuestionnaireRequest
                Questionnaire questionnaire = getQuestionnaire(lecture, questionnaireRequest);

                lecture.getQuestionnaires().add(questionnaire);
            }
        }
    }

    private static Questionnaire getQuestionnaire(Lecture lecture, QuestionnaireRequest questionnaireRequest) {
        Questionnaire questionnaire = new Questionnaire();
        questionnaire.setQuestion(questionnaireRequest.getQuestion());
        List<String> options = questionnaireRequest.getOptions();
        questionnaire.setOpt1(options.get(0));
        questionnaire.setOpt2(options.get(1));
        questionnaire.setOpt3(options.get(2));
        questionnaire.setOpt4(options.get(3));
        questionnaire.setCorrAns(questionnaireRequest.getCorrAns());
        questionnaire.setLecture(lecture);
        return questionnaire;
    }*/
}
