package com.sunagarlabs.portfolio.resource.service.impl;

import com.sunagarlabs.portfolio.resource.dto.CreateResourceRequest;
import com.sunagarlabs.portfolio.resource.dto.ResourceResponse;
import com.sunagarlabs.portfolio.resource.dto.UpdateResourceRequest;
import com.sunagarlabs.portfolio.resource.entity.Resource;
import com.sunagarlabs.portfolio.resource.entity.ResourceCategory;
import com.sunagarlabs.portfolio.resource.repository.ResourceRepository;
import com.sunagarlabs.portfolio.resource.service.ResourceService;
import com.sunagarlabs.portfolio.shared.exception.ResourceNotFoundException;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ResourceServiceImpl implements ResourceService {

    private final ResourceRepository resourceRepository;

    @Override
    public ResourceResponse createResource(CreateResourceRequest request) {
        log.info("Creating resource title={}", request.title());

        Resource resource = new Resource();
        resource.setTitle(request.title());
        resource.setDescription(request.description());
        resource.setCategory(request.category());
        resource.setType(request.type());
        resource.setLink(request.link());

        Resource saved = resourceRepository.save(resource);
        return toResponse(saved);
    }

    @Override
    public List<ResourceResponse> getResources(ResourceCategory category) {
        List<Resource> resources = category == null
                ? resourceRepository.findAll()
                : resourceRepository.findByCategory(category);
        return resources.stream().map(this::toResponse).toList();
    }

    @Override
    public ResourceResponse getResourceById(UUID id) {
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Resource not found: " + id));
        return toResponse(resource);
    }

    @Override
    public ResourceResponse updateResource(UUID id, UpdateResourceRequest request) {
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Resource not found: " + id));

        resource.setTitle(request.title());
        resource.setDescription(request.description());
        resource.setCategory(request.category());
        resource.setType(request.type());
        resource.setLink(request.link());

        Resource updated = resourceRepository.save(resource);
        return toResponse(updated);
    }

    @Override
    public void deleteResource(UUID id) {
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Resource not found: " + id));
        resourceRepository.delete(resource);
    }

    private ResourceResponse toResponse(Resource resource) {
        return ResourceResponse.builder()
                .id(resource.getId())
                .title(resource.getTitle())
                .description(resource.getDescription())
                .category(resource.getCategory())
                .type(resource.getType())
                .link(resource.getLink())
                .createdAt(resource.getCreatedAt())
                .build();
    }
}
