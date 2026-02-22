package com.sunagarlabs.portfolio.resource.repository;

import com.sunagarlabs.portfolio.resource.entity.Resource;
import com.sunagarlabs.portfolio.resource.entity.ResourceCategory;
import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource, UUID> {

    List<Resource> findByCategory(ResourceCategory category);
}
